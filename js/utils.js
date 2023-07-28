export const notANumber = (value) => isNaN(value) || value == "";

export const calculateIMC = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(1)