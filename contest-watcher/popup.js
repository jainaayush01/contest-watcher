const getContests = () => {
    const doc = document.getElementById("contests");
    doc.innerHTML = "";

    fetch("https://clist-contests.jainaayush01.repl.co/api/contest")
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const contests = res.objects;
            console.log(contests);
            contests.map((elem, elemIdx) => {
                // console.log({ elem, elemIdx });
                let startTime = moment(elem.start, "YYYY-MM-DD hh:mm:ss");
                let endTime = moment(elem.end, "YYYY-MM-DD hh:mm:ss");
                let datetime = new Date(startTime._d);
                let time = datetime.getTime();
                time = time + 19800000; //IST
                // console.log(time);

                let contest = document.createElement("div");
                contest.classList = ["contest"];
                contest.innerHTML = `<a href="${elem.href}" target="_blank">${elem.event}</a><br> Starts at: ${startTime}<br> Ends at: ${endTime}<br>`;

                doc.appendChild(contest);

                chrome.runtime.sendMessage("", {
                    type: "notification",
                    options: {
                        type: "basic",
                        title: `${elem.event}`,
                        message: `${elem.href}`,
                        iconUrl: "./img.png",
                        priority: 2,
                        eventTime: time,
                    },
                });
            });
        });
};

setInterval(() => {
    getContests();
}, 86400000)
getContests();

document.getElementById("btn").addEventListener("click", () => {
    document.body.classList.toggle('dark');
    document.getElementById('btn').classList.toggle('borderDark');
    document.querySelectorAll('.contest').forEach((elem, elemIdx) => {
        elem.classList.toggle('borderDark');
    })
})