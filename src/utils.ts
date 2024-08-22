export const handleRememberMe = (
  username: string,
  password: string,
  rememberMe: boolean
) => {
  if (rememberMe) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    const credentials = {
      username,
      password,
      expiry: expiryDate.getTime(),
    };
    localStorage.setItem("loginCredentials", JSON.stringify(credentials));
  } else {
    localStorage.removeItem("loginCredentials");
  }
};
