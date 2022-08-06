// https://calculator.swiftutors.com/reluctance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const reluctanceRadio = document.getElementById('reluctanceRadio');
const circuitLengthRadio = document.getElementById('circuitLengthRadio');
const relativeMagneticPermeabilityRadio = document.getElementById('relativeMagneticPermeabilityRadio');
const circuitsCrosssectionalAreaRadio = document.getElementById('circuitsCrosssectionalAreaRadio');

let reluctance;
const permeabilityofvacuum = 4 * Math.PI * 0.0000001;
let circuitLength = v1;
let relativeMagneticPermeability = v2;
let circuitsCrosssectionalArea = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

reluctanceRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Circuit Length (m)';
  variable2.textContent = '(μr) Relative Magnetic Permeability';
  variable3.textContent = '(A) Circuit\'s Cross-sectional Area (m²)';
  circuitLength = v1;
  relativeMagneticPermeability = v2;
  circuitsCrosssectionalArea = v3;
  result.textContent = '';
});

circuitLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Reluctance (At/Wb)';
  variable2.textContent = '(μr) Relative Magnetic Permeability';
  variable3.textContent = '(A) Circuit\'s Cross-sectional Area (m²)';
  reluctance = v1;
  relativeMagneticPermeability = v2;
  circuitsCrosssectionalArea = v3;
  result.textContent = '';
});

relativeMagneticPermeabilityRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Reluctance (At/Wb)';
  variable2.textContent = '(I) Circuit Length (m)';
  variable3.textContent = '(A) Circuit\'s Cross-sectional Area (m²)';
  reluctance = v1;
  circuitLength = v2;
  circuitsCrosssectionalArea = v3;
  result.textContent = '';
});

circuitsCrosssectionalAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Reluctance (At/Wb)';
  variable2.textContent = '(I) Circuit Length (m)';
  variable3.textContent = '(μr) Relative Magnetic Permeability';
  reluctance = v1;
  circuitLength = v2;
  relativeMagneticPermeability = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(reluctanceRadio.checked)
    result.textContent = `Reluctance = ${computeReluctance().toFixed(2)} At/Wb`;

  else if(circuitLengthRadio.checked)
    result.textContent = `Circuit Length = ${computeCircuitLength().toFixed(2)} m`;

  else if(relativeMagneticPermeabilityRadio.checked)
    result.textContent = `Relative Magnetic Permeability = ${computeRelativeMagneticPermeability().toFixed(2)}`;

  else if(circuitsCrosssectionalAreaRadio.checked)
    result.textContent = `Circuit's Cross-sectional Area = ${computeCircuitsCrosssectionalArea().toFixed(2)} m²`;
})

// calculation

function computeReluctance() {
  return Number(circuitLength.value) / (permeabilityofvacuum * Number(relativeMagneticPermeability.value) * Number(circuitsCrosssectionalArea.value));
}

function computeCircuitLength() {
  return Number(reluctance.value) * (permeabilityofvacuum * Number(relativeMagneticPermeability.value) * Number(circuitsCrosssectionalArea.value));
}

function computeRelativeMagneticPermeability() {
  return Number(circuitLength.value) / (permeabilityofvacuum * Number(reluctance.value) * Number(circuitsCrosssectionalArea.value));
}

function computeCircuitsCrosssectionalArea() {
  return Number(circuitLength.value) / (permeabilityofvacuum * Number(relativeMagneticPermeability.value) * Number(reluctance.value));
}