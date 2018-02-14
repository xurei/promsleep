module.exports = function promsleep(ms, out) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(out), ms);
	});
};
