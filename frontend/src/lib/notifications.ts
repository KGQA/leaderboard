import Swal from 'sweetalert2';

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 1000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	}
});

export function notifySuccess(title: string, message: string) {
	Toast.fire({
		icon: 'success',
		title: title,
		text: message
	});
}

export function notifyError(title: string, message: string) {
	Toast.fire({
		icon: 'error',
		title: title,
		text: message
	});
}
