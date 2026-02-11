export const API_BASE_URLS = {
  AUTH: 'https://formachat-app-backend.onrender.com/api/v1/auth',
} as const;

export const AUTH_ENDPOINTS = {
    REGISTER: `${API_BASE_URLS.AUTH}/register`,
    REGISTER_OTP: `${API_BASE_URLS.AUTH}/resend-verification`,
    LOGIN: `${API_BASE_URLS.AUTH}/login`,
    GOOGLE: `${API_BASE_URLS.AUTH}/google`,
    OTP_GENERATE: `${API_BASE_URLS.AUTH}/otp/generate`,
    OTP_VERIFY: `${API_BASE_URLS.AUTH}/otp/verify`,
    OTP_RESEND: `${API_BASE_URLS.AUTH}/otp/resend`,
    PASSWORD_CHANGE: `${API_BASE_URLS.AUTH}/password/change`,
    PASSWORD_RESET: `${API_BASE_URLS.AUTH}/password/reset`,
    PASSWORD_RESET_CONFIRM: `${API_BASE_URLS.AUTH}/password/reset/confirm`,
    PROFILE: `${API_BASE_URLS.AUTH}/profile`,
} as const;

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;