const getRank = points => {
	if(points < 30) return 'Noia'
	if(points < 60) return 'Ganso'
	if(points < 100) return 'Aviãozinho'
	if(points < 150) return 'Fogueteiro'
	if(points < 500) return 'Olheiro'
	
	return 'Dono da boca'
}

export default { getRank }