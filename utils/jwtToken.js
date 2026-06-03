export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  // Determine the cookie name based on the user's role

  const cookieName = user.role === 'Admin' ? 'adminToken' : user.role === 'Doctor' ? 'doctorToken' : 'patientToken';

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
  Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
),
      httpOnly: true,
    })
    // message ko temporary aise change karein:
.json({
  success: true,
  message: message, // <-- Message badal kar dekhein
  user,
  token,
});
};