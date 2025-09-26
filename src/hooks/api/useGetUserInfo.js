const useGetUserInfo = () => {
  const storedAuth = localStorage.getItem("auth");

  if (!storedAuth) {
    return { name: null, profilePhoto: null, userId: null, isAuth: false };
  }

  try {
    const { name, profilePhoto, userId, isAuth } = JSON.parse(storedAuth);
    return { name, profilePhoto, userId, isAuth };
  } catch (error) {
    console.error("Failed to parse auth data:", error);
    return { name: null, profilePhoto: null, userId: null, isAuth: false };
  }
};

export default useGetUserInfo;
