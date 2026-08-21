import React, { useReducer, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, Timer, Award, Zap, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

const QUESTIONS: Question[] = [
  {
    question: 'Which browser API enables single-page client routing without triggering full page reloads?',
    options: ['DOM Storage API', 'History API (pushState/popState)', 'WebSockets API', 'Service Worker Cache'],
    correctOption: 1,
    points: 20
  },
  {
    question: 'Which Core Web Vital metric measures visual stability and unexpected layout jumping?',
    options: ['Largest Contentful Paint (LCP)', 'First Input Delay (FID)', 'Cumulative Layout Shift (CLS)', 'Time to Interactive (TTI)'],
    correctOption: 2,
    points: 20
  },
  {
    question: 'In React, what hook provides a robust state machine pattern for complex state transitions?',
    options: ['useState', 'useRef', 'useReducer', 'useImperativeHandle'],
    correctOption: 2,
    points: 20
  },
  {
    question: 'How do you prevent non-critical JavaScript from blocking the initial HTML parser render?',
    options: ['Using defer or async attributes / dynamic imports', 'Placing script tags inside the <head> tag synchronously', 'Using synchronous XMLHttpRequests', 'Wrapping scripts in eval()'],
    correctOption: 0,
    points: 20
  },
  {
    question: 'What is the primary benefit of the Intersection Observer API in web performance?',
    options: ['Encrypts network payloads', 'Efficiently lazy-loads images and off-screen components without scroll event thrashing', 'Compiles JavaScript to WebAssembly', 'Replaces REST API authentication headers'],
    correctOption: 1,
    points: 20
  }
];

const SECONDS_PER_QUESTION = 15;

type State = {
  status: 'ready' | 'active' | 'finished';
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
};

type Action =
  | { type: 'start' }
  | { type: 'newAnswer'; payload: number }
  | { type: 'nextQuestion' }
  | { type: 'finish' }
  | { type: 'restart' }
  | { type: 'tick' };

const initialState: State = {
  status: 'ready',
  index: 0,
  answer: null,
  points: 0,
  highscore: 80,
  secondsRemaining: QUESTIONS.length * SECONDS_PER_QUESTION
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'active',
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: QUESTIONS.length * SECONDS_PER_QUESTION
      };
    case 'newAnswer': {
      const question = QUESTIONS[state.index];
      const isCorrect = action.payload === question.correctOption;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points
      };
    }
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore: state.points > state.highscore ? state.points : state.highscore
      };
    case 'restart':
      return {
        ...initialState,
        highscore: state.highscore,
        status: 'ready'
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining <= 1 ? 'finished' : state.status
      };
    default:
      return state;
  }
}

export const QuizDemo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, index, answer, points, highscore, secondsRemaining } = state;

  const numQuestions = QUESTIONS.length;
  const maxPossiblePoints = QUESTIONS.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    if (status !== 'active') return;

    const timer = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    if (status === 'finished' && points >= maxPossiblePoints * 0.8) {
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    }
  }, [status, points, maxPossiblePoints]);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const currentQuestion = QUESTIONS[index];
  const hasAnswered = answer !== null;

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 md:p-6 text-slate-100 font-sans shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base md:text-lg">Frontend Engineering Quiz Engine</h3>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                useReducer State Machine
              </span>
            </div>
            <p className="text-xs text-slate-400">Testing JavaScript, SPA Architecture, and Web Performance concepts with strict timer sync</p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
            Highscore: <span className="font-bold text-violet-400">{highscore} pts</span>
          </span>
        </div>
      </div>

      {status === 'ready' && (
        <div className="py-8 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 text-2xl">
            💡
          </div>
          <h4 className="text-lg font-bold text-white">Welcome to the Frontend Quiz!</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {numQuestions} questions testing your mastery in SPA Architecture, Browser History API, Core Web Vitals, and React state management.
          </p>
          <button
            onClick={() => dispatch({ type: 'start' })}
            className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center gap-2 mx-auto shadow-lg shadow-violet-500/20 transition-all hover:scale-105"
          >
            <Play className="w-4 h-4" />
            Start Timed Assessment
          </button>
        </div>
      )}

      {status === 'active' && (
        <div className="space-y-5">
          {/* Progress & Header */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>Question {index + 1} / {numQuestions}</span>
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Timer className="w-3.5 h-3.5" />
                <span>
                  {mins < 10 ? '0' : ''}{mins}:{seconds < 10 ? '0' : ''}{seconds}
                </span>
              </div>
              <span className="text-violet-400 font-bold">{points} / {maxPossiblePoints} pts</span>
            </div>

            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-300"
                style={{ width: `${((index + Number(hasAnswered)) / numQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <h4 className="text-sm font-semibold text-white leading-snug flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
              <span>{currentQuestion.question}</span>
            </h4>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQuestion.options.map((option, optIdx) => {
              const isSelected = answer === optIdx;
              const isCorrect = optIdx === currentQuestion.correctOption;

              let btnStyle = 'bg-slate-800/60 border-slate-700/60 text-slate-200 hover:border-slate-500';
              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/60 border-rose-500/80 text-rose-200 font-semibold';
                } else {
                  btnStyle = 'bg-slate-900/30 border-slate-800/40 text-slate-500 opacity-50';
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={hasAnswered}
                  onClick={() => dispatch({ type: 'newAnswer', payload: optIdx })}
                  className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{option}</span>
                  {hasAnswered && (
                    <span>
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : isSelected ? (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      ) : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Action */}
          <div className="flex justify-end pt-2">
            {hasAnswered && (
              index < numQuestions - 1 ? (
                <button
                  onClick={() => dispatch({ type: 'nextQuestion' })}
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-all"
                >
                  Next Question →
                </button>
              ) : (
                <button
                  onClick={() => dispatch({ type: 'finish' })}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all"
                >
                  View Final Results 🎉
                </button>
              )
            )}
          </div>
        </div>
      )}

      {status === 'finished' && (
        <div className="py-6 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl">
            <Award className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white">Quiz Completed!</h4>
          <p className="text-xs text-slate-300">
            You scored <span className="font-bold text-emerald-400 font-mono text-base">{points}</span> out of {maxPossiblePoints} points ({Math.round((points / maxPossiblePoints) * 100)}%)
          </p>
          <p className="text-xs text-slate-500 font-mono">
            {points === maxPossiblePoints ? '🌟 Flawless score! Architecture master.' : points >= 60 ? '🚀 Great job! Strong frontend fundamentals.' : 'Keep honing your JavaScript & web performance skills!'}
          </p>
          <button
            onClick={() => dispatch({ type: 'restart' })}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-2 mx-auto transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};
