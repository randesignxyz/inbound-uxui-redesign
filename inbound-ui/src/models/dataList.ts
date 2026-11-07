import { useState } from 'react';

type DataList = { type: string; criteria?: any; data: any };
export type MomainType = string;

export default () => {
  const [cacheData, seCacheData] = useState<DataList>();

  const cacheDataList = (data: DataList) => {
    seCacheData(data);
    return data.data;
  };

  const fetchDataList = (type: MomainType) => {
    if (type !== cacheData?.type) {
      seCacheData(undefined);
      return Promise.resolve(undefined);
    }
    return Promise.resolve({ dataList: cacheData?.data, creteria: cacheData.criteria });
  };

  return {
    cacheDataList: cacheDataList,
    fetchDataList: fetchDataList,
  };
};
