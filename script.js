  document.getElementById('git-first').addEventListener('click', function() {
    //window.location.href = 'https://google.com';
    openInNewTab("")
  });

  function openInNewTab(url) {
    window.open(url, '_blank');
  }