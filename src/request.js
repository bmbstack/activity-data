import fetch from 'isomorphic-fetch';

const ROOT = 'http://ssapitnew.knowbox.cn:9001/match';

const SUCCESS_CODE = 99999;

// 请求主体方法
function req(url, successCb, method = 'get') {
	const options = {
		method: method
	};

	let P = fetch(`${ROOT}${url}`, options);

	P.then((response) => {
		const json = response.json();

		json.then((data) => {
			let { code } = data;

			if(code === SUCCESS_CODE) {
				successCb && successCb(data);
			}
		});
	});
}

// 获取总体数据
export function getTotalData(successCb) {
	req('/third/back-total-info', successCb);
};

// 获取第一期数据
export function getFirstData(successCb) {
	req('/third/back-first-info', successCb);
};

// 获取第二期数据
export function getSecondData(successCb) {
	req('/third/back-second-info', successCb);
};

// 获取第三期数据
export function getThirdData(successCb) {
	req('/third/back-third-info', successCb);
};
