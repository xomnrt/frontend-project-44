#!/usr/bin/env node
import main from '../src/cli.js';
import { description, generateQuestionAndExpectedAnswer } from '../src/games/brain-progression.js';

main(description, generateQuestionAndExpectedAnswer);
