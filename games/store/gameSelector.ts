import { createSelector } from "reselect";
import { GamesActions, GamesState } from "../types";
const initialState: GamesState = {
  pending: false,
  games: [],
  error: null,
};
export const getGamesState = (state: any) => state?.games;
export const getGamesState1 = (state: any): GamesState => state?.game?.games;

export const getGamesReady = (state: any): GamesState => state?.pending;

// export const getDisplayedContacts = createSelector(
//   getContactData,
//   getContactSearch,
//   (data, search) => {
//     if (!search) {
//       return data.contacts;
//     }
//     const filterSearch = search.replace(/\s*$/, '');

//     const users = data?.users.map((u) => ({ ...u, canAdd: true, disableRightSwipe: true }));
//     const filteredContacts = [...data.contacts, ...users]?.filter(
//       (i) =>
//         i.rnbUserId?.toUpperCase() === filterSearch.toUpperCase() ||
//         i.providerUsername?.toUpperCase().includes(filterSearch.toUpperCase()) ||
//         i.name?.toUpperCase().includes(filterSearch.toUpperCase())
//     );

//     return filteredContacts.map((fc) => ({
//       ...fc,
//       name: fc.name || fc.providerUsername,
//       picture: fc?.providerDetails?.profile_image_url,
//     }));
//   }
// );
