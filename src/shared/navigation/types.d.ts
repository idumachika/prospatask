export type RootStackParameterList = {
	signIn: React.FC;
	dashboard: React.FC;
};

export type MainStackParameterList = {
	dashboard: React.FC;
	payment: React.FC;
	business: React.FC;
	invoice: React.FC;
	virtual: React.FC;
};

export type HomeStackParameterList = {
	dashboard: React.FC;
	ledger: React.FC;
};
