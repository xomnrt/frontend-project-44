#!/usr/bin/env node
import main from '../src/index.js';
import { description, generateQuestionAndExpectedAnswer } from '../src/games/brain-progression.js';

main(description, generateQuestionAndExpectedAnswer);
