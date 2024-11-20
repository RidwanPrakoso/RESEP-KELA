// Optional JavaScript to handle edit actions
document.querySelectorAll('.edit-icon').forEach(icon => {
	icon.addEventListener('click', () => {
	  alert('Edit action triggered');
	});
  });
  
  function goBack() {
	window.history.back(); // Mengembalikan ke halaman sebelumnya
  }
  
  