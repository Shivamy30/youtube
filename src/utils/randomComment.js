
const comments = [
    "Great stream! Keep up the good work!",
    "I'm loving this content!",
    "Awesome stream! Can't wait for more.",
    "You're doing an amazing job!",
    "This is so entertaining!",
    "Hello from [Your Location]!",
    "I'm a new subscriber, and I'm loving it!",
    "Wow, I've learned so much from this stream!",
    "Greetings from [Another Location]!",
    "You have a new fan here!",
    "I've been following your channel for a long time!",
    "This is the best live stream I've seen!",
    "You're such an inspiration!",
    "Keep the awesome content coming!",
    "I can't believe I'm watching this live!"
];

export const getRandomComments=()=> {
    const randomIndex = Math.floor(Math.random() * comments.length);
    return comments[randomIndex];
}
