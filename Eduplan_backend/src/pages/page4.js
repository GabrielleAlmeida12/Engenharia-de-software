import { useEffect, useState } from 'react';
import { format, addDays } from 'date-fns';
import styles from '../../styles/Page4.module.css'
import { studyEndDate, setStudyEndDate } from '../pages/page1'

const Page4 = () => {
  const [subjects, setSubjects] = useState([]);
  const [studyPlans, setStudyPlans] = useState([]);
  const [startDate, setStartDate] = useState(new Date()); // Data de início (atual)

  useEffect(() => {
    // Faça chamadas à API para buscar os assuntos de "Subjects"
    fetch('/api/subjects')
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error('Erro ao buscar assuntos:', error));

    // Faça chamadas à API para buscar os dados de "StudyPlans"
    fetch('/api/study-plans')
      .then((response) => response.json())
      .then((data) => setStudyPlans(data))
      .catch((error) => console.error('Erro ao buscar dados de estudo:', error));
  }, []);

 // Lógica para calcular a data final baseada na data de início e nos estudos planejados
 const calculateEndDate = () => {
  let endDate = startDate;
  studyPlans.forEach((plan) => {
    endDate = addDays(endDate, plan.StudyHours); // Adiciona o número de dias planejados ao final
  });
  return endDate;
};

return (

<div className={styles.background}>
    <div className={styles.background2}>
        <div className={styles.page4Container}>
            <h1>Página 4 - Plano de Estudo</h1>
            {/* <p>Data de Início do Plano: {format(startDate, 'dd/MM/yyyy')}</p> */}
            <p>Data Inicial do plano de estudo: {format(calculateEndDate(), 'dd/MM/yyyy')}</p>
            <table>
            <thead>
                <tr>
                <th>Assunto--</th>
                <th>Importância--</th>
                <th>Dificuldade</th>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject) => (
                <tr key={subject.SubjectID}>
                    <td>{subject.SubjectName}</td>
                    <td>{subject.Importance}</td>
                    <td>{subject.Difficulty}</td>
                    <td>
                    {/* Lógica para buscar as horas de estudo por dia para cada assunto */}
                    {studyPlans
                        .filter((plan) => plan.SubjectID === subject.SubjectID)
                        }
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
</div>
);
};

export default Page4;