 const studentJSON = `[
      {"Name" : "Jugal1","dept":"CSE","year":"2025"},
      {"Name" : "Jugal2","dept":"CSE","year":"2025"},
      {"Name" : "Jugal3","dept":"CSE","year":"2025"},
      {"Name" : "Jugal4","dept":"CSE","year":"2025"},
      {"Name" : "Jugal5","dept":"CSE","year":"2025"}
    ]`;

    const students = JSON.parse(studentJSON);
    const studentContainer = document.getElementById('student-container');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    let currentPage = 1;
    const perPage = 2;

    function pagination(array, page, perPage) {
      const start = (page - 1) * perPage;
      return array.slice(start, start + perPage);
    }

    function studentCard(student) {
      const card = document.createElement('div');
      card.className = 'student-card';
      card.innerHTML = `
        <h1>${student.Name}</h1>
        <h3>Department: ${student.dept}</h3>
        <h3>Year: ${student.year}</h3>
      `;
      return card;
    }

    function renderStudent(data) {
      studentContainer.innerHTML = '';
      data.forEach(student => {
        const card = studentCard(student);
        studentContainer.appendChild(card);
      });
    }

    function renderPage() {
      const pageData = pagination(students, currentPage, perPage);
      renderStudent(pageData);
      prev.disabled = currentPage === 1;
      next.disabled = currentPage === Math.ceil(students.length / perPage);
    }

    next.addEventListener('click', () => {
      if (currentPage < Math.ceil(students.length / perPage)) {
        currentPage++;
        renderPage();
      }
    });

    prev.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
      }
    });

    renderPage();