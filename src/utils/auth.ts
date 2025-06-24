
export const checkLoginExpiry = (): boolean => {
  const expiryDate = new Date('2025-06-30T08:00:00');
  const currentDate = new Date();
  
  if (currentDate >= expiryDate) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('loginTime');
    return false;
  }
  
  return true;
};

export const isUserLoggedIn = (): boolean => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const hasValidSession = checkLoginExpiry();
  
  return isLoggedIn && hasValidSession;
};

export const logout = (): void => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('loginTime');
};
