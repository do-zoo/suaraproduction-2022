import { ClientLogo, HTTPError, ShowReel, Team } from '@/types/res';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CLIENTS_QUERY, SHOWREELS_QUERY, TEAMS_QUERY } from './constraints';

export const useTeams = (): UseQueryResult<Team[], HTTPError> => {
  return useQuery([TEAMS_QUERY], async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/team`);
    const data = await response.json();
    return data.teams;
  });
};

export const useShowReels = (): UseQueryResult<ShowReel[], HTTPError> => {
  return useQuery([SHOWREELS_QUERY], async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/showreel`);
    const data = await response.json();
    return data.showreels;
  });
};

export const useClientsLogo = (): UseQueryResult<ClientLogo[], HTTPError> => {
  return useQuery([CLIENTS_QUERY], async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/client`);
    const data = await response.json();
    return data.clients;
  });
};
