import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { url } from '../../../connection';


const TeamMember = () => {

    const imgUrl = `${url}/storage/uploads/teamMember/`;
    const axiosPublic = useAxiosPublic();
    const { data = {} } = useQuery({
        queryKey: ["umrah"],
        queryFn: async () => {
            const res = await axiosPublic.get("/get-team-member-data");
            return res.data.teamMemberData;
        },
    });
    //(data)
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-2">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Meet The Amazing People </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.data?.map((member, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full lg:h-64 mx-auto  mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500 text-text_sm2">{member.phone}</p>
            <p className="mt-2 text-gray-600 text-sm2 font-normal">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
