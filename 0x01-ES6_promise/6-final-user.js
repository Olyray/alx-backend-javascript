// Import the necessary functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
// Initialise the async function
export default async function handleProfileSignup(firstName, lastName, filename) {
  // Create an array of the promises using the imported functions
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ];
  // Use promise.allsettled to wait for the promises
  const waitPromises = await Promise.allSettled(promises);
  // return a map of the results
  return waitPromises.map((eachPromise) => (
    {
      status: eachPromise.status,
      value: eachPromise.status === 'fulfilled' ? eachPromise.value : String(eachPromise.reason),
    }
  ));
}
