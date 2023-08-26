export const convertPrice = (price: number) => {
	return new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'KZT' // Код валюты для тенге
	}).format(price)
  }
  