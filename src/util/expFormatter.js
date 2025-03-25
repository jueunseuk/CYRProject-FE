export const formatExp = (totalExp) => {
    return {
        sand: totalExp % 10,
        house: Math.floor((totalExp % 100) / 10),
        castle: Math.floor((totalExp % 1000) / 100),
        desert: Math.floor((totalExp % 10000) / 1000),
        glass: Math.floor(totalExp / 10000),
    };
  };