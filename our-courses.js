document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn');
    var contents = document.querySelectorAll('.display-content');

    function showContent(targetContent) {
      // Remove the 'active' class from all buttons
      buttons.forEach(function (btn) {
        btn.classList.remove('active');
        btn.style.color = 'white'; // Ensure text color is white for all buttons
      });

      // Hide all contents and reset animation
      contents.forEach(function (content) {
        content.classList.remove('active');
        content.style.animationName = ''; // Reset animation
      });

      // Show the selected content with animation
      var contentToShow = document.querySelector(`.display-content[data-content="${targetContent}"]`);
      contentToShow.classList.add('active');
      contentToShow.style.animationName = 'fadeInScaleUp';
    }

    // Set up the default active content (Option 1)
    showContent('content1');

    // Add click event listeners to buttons
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.style.color = 'white'; // Ensure text color is white for all buttons
        });

        // Set the clicked button as active
        button.classList.add('active');
        button.style.color = 'red'; // Set text color to red for the clicked button

        // Show corresponding content
        var targetContent = button.getAttribute('data-target');
        showContent(targetContent);
      });
    });
  });