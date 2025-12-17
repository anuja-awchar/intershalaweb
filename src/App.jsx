import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import HorizontalScroller from './components/HorizontalScroller';
import PlacementCourses from './components/PlacementCourses';
import PopularCategories from './components/PopularCategories';
import ResumeBuilder from './components/ResumeBuilder';
import EmployerSection from './components/EmployerSection';
import Footer from './components/Footer';
import AppDownloadWidget from './components/AppDownloadWidget';

// Mock Data for Scrollers
const internships = [
  { position: 'Web Development', company: 'Google', location: 'Work From Home', salary: '₹ 20,000 /month', duration: '6 Months', tags: ['Internship', 'Engineering'] },
  { position: 'Digital Marketing', company: 'Zomato', location: 'Delhi', salary: '₹ 15,000 /month', duration: '3 Months', tags: ['Internship', 'Marketing'] },
  { position: 'Product Design', company: 'Swiggy', location: 'Bangalore', salary: '₹ 25,000 /month', duration: '6 Months', tags: ['Internship', 'Design'] },
  { position: 'Content Writing', company: 'Times of India', location: 'Work From Home', salary: '₹ 10,000 /month', duration: '2 Months', tags: ['Internship', 'Media'] },
  { position: 'Data Analytics', company: 'KPMG', location: 'Mumbai', salary: '₹ 30,000 /month', duration: '6 Months', tags: ['Internship', 'Data Science'] },
  { position: 'Human Resources', company: 'Deloitte', location: 'Hyderabad', salary: '₹ 12,000 /month', duration: '3 Months', tags: ['Internship', 'MBA'] },
];

const jobs = [
  { position: 'Frontend Developer', company: 'Microsoft', location: 'Bangalore', salary: '₹ 8-12 LPA', duration: 'Experience: 0-2 Years', tags: ['Job', 'Fresher'] },
  { position: 'Business Analyst', company: 'Amazon', location: 'Hyderabad', salary: '₹ 6-10 LPA', duration: 'Experience: 0-1 Years', tags: ['Job', 'Management'] },
  { position: 'Marketing Associate', company: 'Flipkart', location: 'Bangalore', salary: '₹ 4-6 LPA', duration: 'Experience: 0-2 Years', tags: ['Job', 'Marketing'] },
  { position: 'Graphic Designer', company: 'Adobe', location: 'Noida', salary: '₹ 5-8 LPA', duration: 'Experience: 0-3 Years', tags: ['Job', 'Design'] },
  { position: 'Sales Executive', company: 'Byjus', location: 'Pune', salary: '₹ 3-5 LPA', duration: 'Experience: 0-1 Years', tags: ['Job', 'Sales'] },
  { position: 'Software Engineer', company: 'Infosys', location: 'Mysore', salary: '₹ 4-7 LPA', duration: 'Experience: Fresher', tags: ['Job', 'Engineering'] },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <SearchSection />

      <HorizontalScroller
        id="internships-list"
        title={<span>Latest internships on Internshala</span>}
        items={internships}
      />

      <HorizontalScroller
        id="jobs-list"
        title={<span>Latest jobs on Internshala</span>}
        items={jobs}
      />

      <PlacementCourses />

      <PopularCategories />
      <ResumeBuilder />
      <EmployerSection />
      <Footer />
      <AppDownloadWidget />
    </ThemeProvider>
  );
}

export default App;

