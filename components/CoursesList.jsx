import Link from "next/link"
const courseLists = [
  {
    id: 0, 
    course: 'Business Analysis and Strategy',
    quantity: '1,030+ Courses'
  },
  {
    id: 1, 
    course: 'Business Software and Tools',
    quantity: '2,100+ Courses'
  },
  {
    id: 2, 
    course: 'Career Developement',
    quantity: '520+ Courses'
  },
  {
    id: 3, 
    course: 'Customer Service',
    quantity: '190+ Courses'
  },
  {
    id: 4, 
    course: 'Diversity, Equity, and Inclusion (DEI)',
    quantity: '250+ Courses'
  },
  {
    id: 5, 
    course: 'Finance and Accounting',
    quantity: '290+ Courses'
  },
  {
    id: 6, 
    course: 'Human Resources',
    quantity: '440+ Courses'
  },
  {
    id: 7, 
    course: 'Leadership and Management',
    quantity: '1,550+ Courses'
  },
  {
    id: 8, 
    course: 'Marketing',
    quantity: '890+ Courses'
  },
  {
    id: 9, 
    course: 'Professional Development',
    quantity: '1,480+ Courses'
  },
  {
    id: 10, 
    course: 'Project Management',
    quantity: '440+ Courses'
  },
  {
    id: 11, 
    course: 'Sales',
    quantity: '280+ Courses'
  },
  {
    id: 12, 
    course: 'Small Business and Entrepreneurship',
    quantity: '330+ Courses'
  },
  {
    id: 13, 
    course: 'Training and Education',
    quantity: '290+ Courses'
  }
]
export function courses() {
  const courses = courseLists.map((course) => (
    <li key={course.id}>
      <Link href="#" className="hover:underline text-[#000000E6] block">{course.course} <br /><span className="text-slate-500">{course.quantity}</span></Link>
    </li>
  ))
  return (
    <div className="shadow-lg w-[85%] p-4 overflow-auto">
      <ul>{courses}</ul>
    </div>
  )
}