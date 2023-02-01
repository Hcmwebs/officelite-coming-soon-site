const pricing = [
	{
		id: 1,
		title: 'Basic',
		price: 'Free',
		billing: ' up to 5 users for free',
		info: 'Basic document collaboration',
		storage: '2 gb storage',
		perks: 'Great security and support',
	},
	{
		id: 2,
		title: 'Pro',
		price: '$9.99',
		billing: 'Per user, billed monthly',
		info: 'All essential integrations',
		storage: '50 gb storage',
		perks: 'More control and insights',
	},
	{
		id: 3,
		title: 'Ultimate',
		price: '$19.99',
		billing: ' Per user, billed monthly',
		info: '  Robust work management',
		storage: '100 gb storage',
		perks: 'VIP support',
	},
]

const formInputs = [
	{
		id: 1,
		name: 'email',
		type: 'email',
		placeholder: 'email@email.com',
		label: 'Email',
		select: [
			{
				id: 1,
				name: 'Basic PackFree',
			},
			{
				id: 2,
				name: 'Pro Pack $9.99',
			},
			{
				id: 3,
				name: 'Ultimate Pack $19.99',
			},
		],
	},
	{
		id: 2,
		name: 'phoneNumber',
		type: 'number',
		placeholder: '+x xxx xxx xxxx',
		label: 'Phone Number',
	},
	{
		id: 3,
		name: 'Company',
		type: 'text',
		placeholder: 'name of your company',
		label: 'Company',
	},
]

export { pricing, formInputs }
