import ReactGA from 'react-ga';

const useGoogleAnalyticsTracker = (category) => {
  const eventTracker = (action, label) => {
    console.log(action, label, category)
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export default useGoogleAnalyticsTracker;