function toggleTrialMessage() {
    const emailInputSection = document.getElementById("email-input");
    
    if (emailInputSection.innerHTML.includes("input")) {
        emailInputSection.innerHTML = `
            <p>Thank you for starting your trial! Please check your email for further instructions.</p>
            <p onclick="toggleTrialMessage()" style="color: #3fc380; cursor: pointer;">Back</p>
        `;
    } else {
        emailInputSection.innerHTML = `
            <input type="email" placeholder="Work email address">
            <div id="start-trial" onclick="toggleTrialMessage()">Start Trial</div>
        `;
    }
}

function toggleLearnMore() {
    const learnMoreContent = document.getElementById("learn-more-content");

    learnMoreContent.classList.toggle("hidden");
}
