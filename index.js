const input_val = document.getElementById("input-el")
const convert_btn = document.getElementById("convert-btn")
const length_el = document.getElementById("length-el")
const volume_el = document.getElementById("volume-el")
const mass_el = document.getElementById("mass-el")


convert_btn.addEventListener("click", function () {
    const val = Number(input_val.value)

    render(val)
})

function render(val) {
    const feet = (val * 3.28084).toFixed(3)
    const meter = (val * 0.3048).toFixed(3)
    const gallon = (val * 0.264172).toFixed(3)
    const liters = (val * 3.78541).toFixed(3)
    const pounds = (val * 2.20462).toFixed(3)
    const kilos = (val * 0.453592).toFixed(3)

    length_el.textContent = `${val} meters = ${feet} feet | ${val} feet = ${meter} meters`
    volume_el.textContent = `${val} liters = ${gallon} gallons | ${val} gallons = ${liters} liters`
    mass_el.textContent = `${val} kilos = ${pounds} pounds | ${val} pounds = ${kilos} kilos`
}
