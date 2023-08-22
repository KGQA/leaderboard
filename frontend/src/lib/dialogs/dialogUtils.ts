export function toggleDialog(dialogName: string) {
	const dialog = document.getElementById(dialogName) as HTMLDialogElement;
	if (!dialog) {
		throw new Error(`Dialog ${dialogName} not found`);
	}
	if (dialog.open) {
		dialog.close();
	} else {
		dialog.showModal();
	}
}
