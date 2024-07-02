document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    alert(`Agendamento realizado para o dia ${date} às ${time}.`);
});
