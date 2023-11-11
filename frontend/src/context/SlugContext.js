import React, { createContext, useContext, useState } from "react";

const SlugContext = createContext();

export const useSlug = () => {
  return useContext(SlugContext);
};

export const SlugProvider = ({ children }) => {
  const generateRandomSlug = (length) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let slug = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      slug += charset.charAt(randomIndex);
    }
    return slug;
  };

  return (
    <SlugContext.Provider value={{ generateRandomSlug }}>
      {children}
    </SlugContext.Provider>
  );
};
