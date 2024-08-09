import React, { useState, useEffect } from 'react';
import { Input, List, Spin, message } from 'antd';
import axios from 'axios';

interface LocationSearchProps {
  onSelectLocation: (address: string) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSelectLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setLoading(true);
        axios
          .get('https://nominatim.openstreetmap.org/search', {
            params: {
              q: searchTerm,
              format: 'json',
              addressdetails: 1,
            },
            headers: {
              'User-Agent': 'Ostivities/1.0 (ostivities@gmail.com)', // Add your app name and contact information
            },
          })
          .then(response => {
            const results = response.data.map((result: any) => result.display_name);
            setLocations(results);
            setLoading(false);
          })
          .catch(error => {
            console.error('Nominatim API error:', error);
            message.error('Failed to fetch locations.');
            setLoading(false);
          });
      } else {
        setLocations([]);
      }
    }, 1000); // Delay to adhere to the rate limit

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSelect = (address: string) => {
    onSelectLocation(address);
  };

  return (
    <div>
      <Input.Search
        placeholder="Search for a location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      {loading ? (
        <div style={{ textAlign: 'center' }}><Spin /></div>
      ) : (
        <List
          dataSource={locations}
          renderItem={item => (
            <List.Item onClick={() => handleSelect(item)} style={{ cursor: 'pointer' }}>
              {item}
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default LocationSearch;