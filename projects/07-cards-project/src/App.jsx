
import Card from './components/Card';
const App = () => {

  const jobs = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    image:
      "https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg",
  },
  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$150/hr",
    location: "Bangalore, India",
    image:
      "https://i.pinimg.com/736x/52/6d/7e/526d7e185c125ee44ab32230bc25bc9b.jpg",
  },
  {
    id: 3,
    company: "Microsoft",
    posted: "1 week ago",
    role: "React Developer",
    type: "Remote",
    level: "Junior Level",
    salary: "$90/hr",
    location: "Hyderabad, India",
    image:
      "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
  },
  {
    id: 4,
    company: "Netflix",
    posted: "3 days ago",
    role: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$180/hr",
    location: "Pune, India",
    image:
      "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
  },
  {
    id: 5,
    company: "Spotify",
    posted: "6 days ago",
    role: "UI Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Delhi, India",
    image:
      "https://i.pinimg.com/736x/e2/b7/48/e2b74811d8f20d1373ec2d085d1fcfb7.jpg",
  },
  {
    id: 6,
    company: "Adobe",
    posted: "4 days ago",
    role: "UX Researcher",
    type: "Part Time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Chennai, India",
    image:
      "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
  },
  {
    id: 7,
    company: "Meta",
    posted: "Today",
    role: "Full Stack Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$200/hr",
    location: "Remote",
    image:
      "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
  },
  {
    id: 8,
    company: "Airbnb",
    posted: "2 weeks ago",
    role: "Visual Designer",
    type: "Remote",
    level: "Mid Level",
    salary: "$140/hr",
    location: "Goa, India",
    image:
      "https://i.pinimg.com/736x/50/bb/e3/50bbe3e676265251a093cece47b5d8ea.jpg",
  },
  {
    id: 9,
    company: "Tesla",
    posted: "1 day ago",
    role: "Product Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$170/hr",
    location: "Bangalore, India",
    image:
      "https://i.pinimg.com/736x/df/00/b1/df00b1d8590dba5b570420e96809b5c6.jpg",
  },
];

console.log(jobs);

  return (
    <div className='parent'>
      {jobs.map(function(elm){
        return <Card comp={elm.company} 
                    post = {elm.posted}
                    designation = {elm.role}
                    time = {elm.type}
                    lev = {elm.level}
                    pay = {elm.salary}
                    loc={elm.location}
                    logo={elm.image}
              />
      })}
    </div>
  )
}

export default App
