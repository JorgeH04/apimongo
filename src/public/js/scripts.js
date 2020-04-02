$('#btn-del').click(function (e) {
    e.preventDefault();
    let $this = $(this);
    const response = confirm('Are you sure you want to delete this image?');
    if (response) {
      let comId = $(this).data('id');
      console.log(comId);
    }
  });