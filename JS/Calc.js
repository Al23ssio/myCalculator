document.addEventListener('DOMContentLoaded', () => {
  const val1 = document.getElementById('val1');
  const val2 = document.getElementById('val2');
  const resultEl = document.getElementById('result');
  const memoryEl = document.getElementById('memory');
  const buttons = document.querySelectorAll('.op');
  const clrBtn = document.getElementById('clr');

  function formatNumber(n){
    // Rimuove trailing zeros inutili in caso di numeri decimali
    return Number.isFinite(n) ? +parseFloat(n.toFixed(10)) : n;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const op = btn.dataset.operation;
      if (op === 'CLR') return; // gestito separatamente

      const a = parseFloat(val1.value);
      const b = parseFloat(val2.value);

      if (Number.isNaN(a) || Number.isNaN(b)) {
        resultEl.textContent = 'Inserisci entrambi i numeri';
        resultEl.style.color = '#f59e0b'; // ambra per warning
        return;
      }

      let res;
      switch(op){
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/':
          if (b === 0) {
            resultEl.textContent = 'Errore: divisione per 0';
            resultEl.style.color = '#ef4444';
            return;
          }
          res = a / b;
          break;
        default:
          return;
      }

      res = formatNumber(res);
      resultEl.textContent = res;
      resultEl.style.color = ''; // ripristina colore predefinito

      const li = document.createElement('li');
      li.textContent = `${a} ${op} ${b} = ${res}`;
      memoryEl.prepend(li);
    });
  });

  // CLR: elimina i valori inseriti in input (e azzera il risultato visualizzato)
  clrBtn.addEventListener('click', () => {
    val1.value = '';
    val2.value = '';
    resultEl.textContent = '';
    // Manteniamo lo storico; se vuoi svuotarlo anche qui, decommenta la riga sotto:
    // memoryEl.innerHTML = '';
    val1.focus();
  });
});