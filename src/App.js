import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김예원',
  'birthday': '990730',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '예원김',
  'birthday': '990629',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '원김예',
  'birthday': '990528',
  'gender': '여자',
  'job': '디자이너'
}
]

function App() {
  return (
    <div>
    {
      customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })
    }
    </div>
  );
}

export default App;
 