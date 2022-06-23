import React from 'react'
import { useQuery } from 'react-query'
import apis from '../api/main'

export const useGetVehicleDetail = (vehicleId) => {
 const fetcher = async () => {
    if(vehicleId !== undefined){
      const { data } = await apis.getVehicleDetails(vehicleId);
      return data;
    }
    
  };

  return useQuery(["vehicleDetail", vehicleId], fetcher)
}
