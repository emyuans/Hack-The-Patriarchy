

// Get HTML elements
const commentButtons = document.querySelectorAll(".comment-button");

// Function to add a new comment
function addComment(event) {
    const post = event.target.closest(".post");
    const commentInput = post.querySelector(".comment-input");
    const comments = post.querySelector(".comments");
    const newCommentText = commentInput.value;

    if (newCommentText.trim() !== "") {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `<span class="user-name">You:</span><p>${newCommentText}</p>`;
        comments.appendChild(commentDiv);
        commentInput.value = "";
    }
}

// Attach click event listeners to all comment buttons
commentButtons.forEach(button => {
    button.addEventListener("click", addComment);
});



