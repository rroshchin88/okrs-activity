// Global variables to track the validation status of each section
let objectiveIsValid = false;
let keyResultsAreValid = false;

// Validates the objective text and updates the feedback section
function validateObjectiveText() {
    var objective = document.getElementById('objectiveInput').value.trim();
    var feedback = validateObjective(objective);
    document.getElementById('objectiveFeedback').innerText = feedback.messages.join(" ");
    objectiveIsValid = feedback.isValid; // Update the validation status
    checkOverallValidation(); // Check if both sections are valid
}

// Validates the key results text and updates the feedback section
function validateKeyResults() {
    var keyResults = document.getElementById('keyResultsInput').value.trim();
    var feedback = validateKeyResultsText(keyResults);
    document.getElementById('keyResultsFeedback').innerText = feedback.messages.join(" ");
    keyResultsAreValid = feedback.isValid; // Update the validation status
    checkOverallValidation(); // Check if both sections are valid
}

// Checks if both the objective and key results are valid and shows the modal if they are
function checkOverallValidation() {
    if (objectiveIsValid && keyResultsAreValid) {
        showModal();
    } else {
        closeModal();
    }
}

// Contains the logic to validate the objective text
function validateObjective(objective) {
    let feedback = {
        isValid: true,
        messages: []
    };

    // Check: Objective should not include numbers
    if (/\d/.test(objective)) {
        feedback.isValid = false;
        feedback.messages.push("Objective should not include numbers.");
    }

    // Check: Objective should be inspirational and actionable
    const actionVerbs = ['create', 'develop', 'establish', 'enhance', 'improve', 'increase', 'reinvent', 'transform', 'innovate'];
    const verbFound = actionVerbs.some(verb => objective.toLowerCase().includes(verb));
    if (!verbFound) {
        feedback.isValid = false;
        feedback.messages.push("Objective should include an action-oriented verb (e.g., create, develop, enhance).");
    }

    // Check: Objective Types (Build, Improve, Innovate)
    const buildKeywords = ['create', 'build', 'establish'];
    const improveKeywords = ['enhance', 'improve', 'increase'];
    const innovateKeywords = ['reinvent', 'transform', 'innovate'];

    const typeFound = buildKeywords.some(word => objective.toLowerCase().includes(word)) ||
                      improveKeywords.some(word => objective.toLowerCase().includes(word)) ||
                      innovateKeywords.some(word => objective.toLowerCase().includes(word));

    if (!typeFound) {
        feedback.isValid = false;
        feedback.messages.push("Objective should clearly indicate if it aims to build, improve, or innovate.");
    }

    // Check: Levels of Impact (Directional, Meaningful, Audacious)
    const directionalKeywords = ['guide', 'focus', 'direct'];
    const meaningfulKeywords = ['meaningful', 'change', 'impact'];
    const audaciousKeywords = ['energize', 'revolutionize', 'transform'];

    const impactFound = directionalKeywords.some(word => objective.toLowerCase().includes(word)) ||
                        meaningfulKeywords.some(word => objective.toLowerCase().includes(word)) ||
                        audaciousKeywords.some(word => objective.toLowerCase().includes(word));

    if (!impactFound) {
        feedback.isValid = false;
        feedback.messages.push("Objective should indicate its level of impact: directional, meaningful, or audacious.");
    }

    return feedback;
}

// Contains the logic to validate the key results text
function validateKeyResultsText(keyResults) {
    let feedback = {
        isValid: true,
        messages: []
    };

    // Example validation: Key results should include numbers
    if (!/\d/.test(keyResults)) {
        feedback.isValid = false;
        feedback.messages.push("Key results should include numbers.");
    }

    // Additional validation logic can be added here

    return feedback;
}

// Shows the help text for objectives
function showObjectiveHelp() {
    document.getElementById('objectiveHelp').style.display = 'block';
}

// Shows the help text for key results
function showKeyResultsHelp() {
    document.getElementById('keyResultsHelp').style.display = 'block';
}

// Displays the success modal
function showModal() {
    document.getElementById('successModal').style.display = 'block';
}

// Hides the success modal
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Generates a random scenario from the predefined list
function generateRandomScenario() {
    var scenarios = [
        "You are a product manager tasked with launching a new mobile app.",
        "You are a marketing specialist aiming to increase brand awareness.",
        "You are a project manager leading a team to deliver a major software upgrade.",
        "You are a sales manager looking to grow your team's revenue by 20%.",
        "You are a customer support manager aiming to improve customer satisfaction.",
        "You are a software engineer working to reduce the number of bugs in your product.",
        "You are a UX designer aiming to improve the user experience of your product.",
        "You are a data analyst looking to increase the accuracy of your reports.",
        "You are a content writer aiming to increase the number of blog subscribers.",
        "You are a HR manager aiming to improve employee retention.",
        "You are a finance manager aiming to reduce the company's operating expenses.",
        "You are a business analyst aiming to improve the company's profit margins.",
        "You are a supply chain manager aiming to reduce the company's inventory costs.",
        "You are a customer success manager aiming to increase customer retention.",
        "You are a graphic designer aiming to improve the visual identity of your product.",
        "You are a social media manager aiming to increase the company's social media engagement.",
        "You are a product owner aiming to improve the team's velocity.",
        "You are a QA engineer aiming to reduce the number of bugs in your product.",
        "You are a technical writer aiming to improve the quality of your product documentation.",
        "You are a business development manager aiming to increase the company's market share.",
        "You are a product marketing manager aiming to increase the number of product trials.",
        "You are a customer experience manager aiming to improve the customer journey.",
        "You are a product manager aiming to increase the number of active users of your product.",
        "You are a sales enablement manager aiming to improve the effectiveness of your sales team.",
        "You are a product manager aiming to improve the onboarding experience of your product.",
        "You are a project manager aiming to improve the team's collaboration.",
        // Add more scenarios as needed
    ];
    var randomIndex = Math.floor(Math.random() * scenarios.length);
    document.getElementById('scenario').innerText = scenarios[randomIndex];
}

// Adds an event listener to generate the initial scenario when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', generateRandomScenario);

// Function to load content for OKRs 101
function loadOkrs101Content() {
    document.getElementById('contentContainer').innerHTML = `
        <h1>OKRs 101</h1>
        <p>This is the content for OKRs 101.</p>
    `;
}

// Function to load content for Objectives
function loadObjectivesContent() {
    document.getElementById('contentContainer').innerHTML = `
        <h1>Objectives</h1>
        <p>This is the content for Objectives.</p>
    `;
}

// Function to load content for Key Results
function loadKeyResultsContent() {
    document.getElementById('contentContainer').innerHTML = `
        <h1>Key Results</h1>
        <p>This is the content for Key Results.</p>
    `;
}

// Function to load content for Write Your Own OKRs
function loadWriteOkrsContent() {
    document.getElementById('contentContainer').innerHTML = `
        <h1>Write Your Own OKRs</h1>
        <p>This is the content for Write Your Own OKRs.</p>
    `;
}

// Add event listeners to the navigation menu items
document.getElementById('okrs101').addEventListener('click', loadOkrs101Content);
document.getElementById('objectives').addEventListener('click', loadObjectivesContent);
document.getElementById('keyResults').addEventListener('click', loadKeyResultsContent);
document.getElementById('writeOkrs').addEventListener('click', loadWriteOkrsContent);
