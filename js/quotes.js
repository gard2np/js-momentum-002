const quoteHtml = document.querySelector(".quote");
const authorHtml = document.querySelector(".author");
const quotesList = [
	{
		quote:
			"투자의 성공 여부는 얼마나 오랫동안 세상의 비관론을 무시할 수 있는지에 달려있다.",
		author: "- 피터린치",
	},
	{
		quote:
			"성공은 그 자체로 실패의 씨앗을 품고 있으며, 실패는 그 자체로 성공의 씨앗을 품고 있다.",
		author: "- 하워드 막스",
	},
	{
		quote: "독점력을 구축했는지의 여부가 고수익을 보장해주는 열쇠가 된다.",
		author: "- 워렌 버핏",
	},
	{
		quote:
			"당신이 할 수 있는 만큼 절말 열심히 일하세요. 적어도 일주일에 80~100시간 가량 투자해야합니다. 그게 성공에 가까이 가는 지름길입니다.",
		author: "- 일론 머스크",
	},
	{
		quote: "늦었다고 생각했을 때는 정말 늦은거다.",
		author: "- 박명수",
	},
	{
		quote: "I'm Iron Man",
		author: "- Tony Stark",
	},
	{
		quote: "Do you wanna build a snowman?",
		author: "- Elsa",
	},
	{
		quote: "티끌 모아 티끌",
		author: "- 박명수",
	},
	{
		quote: "시장을 예측하려고 정력을 낭비하지 마라.",
		author: "- 피터린치",
	},
	{
		quote: "HODL!!!!",
		author: "- Apes",
	},
];

function randomQuotes() {
	const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
	quoteHtml.innerHTML = randomQuote.quote;
	authorHtml.innerHTML = randomQuote.author;
}

randomQuotes();
