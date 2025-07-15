class MathExtension {
  getInfo() {
    return {
      id: 'mathtools',
      name: 'Math Tools',
      color1: '#a64ac9',
      color2: '#7e57c2',
      blocks: [
        { opcode: 'add', blockType: Scratch.BlockType.REPORTER, text: '[A] + [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 } } },
        { opcode: 'subtract', blockType: Scratch.BlockType.REPORTER, text: '[A] - [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 8 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 } } },
        { opcode: 'multiply', blockType: Scratch.BlockType.REPORTER, text: '[A] × [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } } },
        { opcode: 'divide', blockType: Scratch.BlockType.REPORTER, text: '[A] ÷ [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 } } },
        { opcode: 'mod', blockType: Scratch.BlockType.REPORTER, text: '[A] mod [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 } } },
        { opcode: 'power', blockType: Scratch.BlockType.REPORTER, text: '[A] ^ [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 } } },
        { opcode: 'percentage', blockType: Scratch.BlockType.REPORTER, text: '[A]% of [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 150 } } },
        { opcode: 'absolute', blockType: Scratch.BlockType.REPORTER, text: 'abs([NUM])', arguments: { NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: -10 } } },
        { opcode: 'round', blockType: Scratch.BlockType.REPORTER, text: 'round([NUM])', arguments: { NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4.75 } } },

        // Logic
        { opcode: 'equals', blockType: Scratch.BlockType.BOOLEAN, text: '[A] = [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } } },
        { opcode: 'greaterThan', blockType: Scratch.BlockType.BOOLEAN, text: '[A] > [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } } },
        { opcode: 'lessThan', blockType: Scratch.BlockType.BOOLEAN, text: '[A] < [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 7 } } },
        { opcode: 'isEven', blockType: Scratch.BlockType.BOOLEAN, text: '[NUM] is even?', arguments: { NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 6 } } },
        { opcode: 'isPrime', blockType: Scratch.BlockType.BOOLEAN, text: '[NUM] is prime?', arguments: { NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 7 } } },

        // Random
        { opcode: 'pickRandom', blockType: Scratch.BlockType.REPORTER, text: 'pick random [A] to [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 } } },

        // Advanced
        { opcode: 'squareRoot', blockType: Scratch.BlockType.REPORTER, text: '√[NUM]', arguments: { NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 81 } } },
        { opcode: 'factorial', blockType: Scratch.BlockType.REPORTER, text: 'factorial([NUM])', arguments: { NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } } },
        { opcode: 'logBase', blockType: Scratch.BlockType.REPORTER, text: 'log base [BASE] of [VALUE]', arguments: { BASE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }, VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1000 } } },
        { opcode: 'sinDeg', blockType: Scratch.BlockType.REPORTER, text: 'sin([ANGLE]°)', arguments: { ANGLE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30 } } },
        { opcode: 'gcd', blockType: Scratch.BlockType.REPORTER, text: 'GCD([A], [B])', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 24 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 36 } } },
        { opcode: 'lcm', blockType: Scratch.BlockType.REPORTER, text: 'LCM([A], [B])', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 6 } } },
        { opcode: 'solveQuadratic', blockType: Scratch.BlockType.REPORTER, text: 'solve ax²+bx+c: a=[A] b=[B] c=[C]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: -3 }, C: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 } } },

        // Fun
        { opcode: 'randomEquation', blockType: Scratch.BlockType.REPORTER, text: 'random math equation' },
        { opcode: 'generateQuiz', blockType: Scratch.BlockType.REPORTER, text: 'generate random quiz' },
        { opcode: 'evaluateExpression', blockType: Scratch.BlockType.REPORTER, text: 'solve [EXP]', arguments: { EXP: { type: Scratch.ArgumentType.STRING, defaultValue: "3+4*2" } } }
      ]
    };
  }

  add({ A, B }) { return Number(A) + Number(B); }
  subtract({ A, B }) { return Number(A) - Number(B); }
  multiply({ A, B }) { return Number(A) * Number(B); }
  divide({ A, B }) { return Number(B) === 0 ? 'Infinity' : Number(A) / Number(B); }
  mod({ A, B }) { return Number(A) % Number(B); }
  power({ A, B }) { return Math.pow(Number(A), Number(B)); }
  percentage({ A, B }) { return (Number(A) / 100) * Number(B); }
  absolute({ NUM }) { return Math.abs(NUM); }
  round({ NUM }) { return Math.round(NUM); }

  equals({ A, B }) { return Number(A) === Number(B); }
  greaterThan({ A, B }) { return Number(A) > Number(B); }
  lessThan({ A, B }) { return Number(A) < Number(B); }
  isEven({ NUM }) { return Number(NUM) % 2 === 0; }
  isPrime({ NUM }) {
    const n = Math.floor(Number(NUM));
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
  }

  pickRandom({ A, B }) {
    const min = Math.min(Number(A), Number(B));
    const max = Math.max(Number(A), Number(B));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  squareRoot({ NUM }) { return Math.sqrt(Number(NUM)); }
  factorial({ NUM }) {
    const n = Math.floor(Number(NUM));
    if (n < 0) return 'undefined';
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
  }
  logBase({ BASE, VALUE }) { return Math.log(Number(VALUE)) / Math.log(Number(BASE)); }
  sinDeg({ ANGLE }) { return Math.sin(Number(ANGLE) * Math.PI / 180); }
  gcd({ A, B }) {
    let a = Math.abs(Number(A)), b = Math.abs(Number(B));
    while (b) [a, b] = [b, a % b];
    return a;
  }
  lcm({ A, B }) {
    const a = Number(A), b = Number(B);
    if (a === 0 || b === 0) return 0;
    return Math.abs((a * b) / this.gcd({ A: a, B: b }));
  }

  solveQuadratic({ A, B, C }) {
    const a = Number(A), b = Number(B), c = Number(C);
    const d = b * b - 4 * a * c;
    if (d < 0) return 'No Real Roots';
    const sqrtD = Math.sqrt(d);
    return `x=${(-b + sqrtD) / (2 * a)}, x=${(-b - sqrtD) / (2 * a)}`;
  }

  randomEquation() {
    const a = Math.floor(Math.random() * 10 + 1);
    const b = Math.floor(Math.random() * 10);
    return `${a} × ${b} = ${a * b}`;
  }

  generateQuiz() {
    const ops = ['+', '-', '*', '/'];
    const a = Math.floor(Math.random() * 50);
    const b = Math.floor(Math.random() * 49 + 1);
    const op = ops[Math.floor(Math.random() * ops.length)];
    return `${a} ${op} ${b}`;
  }

  evaluateExpression({ EXP }) {
    try {
      return eval(EXP);
    } catch {
      return "Error";
    }
  }
}

Scratch.extensions.register(new MathExtension());