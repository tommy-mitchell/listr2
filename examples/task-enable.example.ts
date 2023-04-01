import { ListrLogger } from '@utils'
import { delay, Listr } from 'listr2'

interface Ctx {
  skip: boolean
}

const logger = new ListrLogger({ useIcons: false })

let task: Listr<Ctx>

// JeLYvYj1f4ddSjgwkUp7Nr8hICHLdEsU
logger.started('Example for enabling a task by utilizing previous tasks and the general context.')

task = new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: async (ctx): Promise<void> => {
        ctx.skip = true
        await delay(2000)
      }
    },

    {
      title: 'This task will never execute.',
      enabled: (ctx): boolean => !ctx.skip,
      task: async (): Promise<void> => {
        await delay(2000)
      }
    }
  ],
  { concurrent: false }
)

try {
  const context = await task.run()

  logger.completed([ 'ctx: %o', context ])
} catch (e: any) {
  logger.failed(e)
}

// 2PeJ1GS5SrNdC7DXMv8nHAQNfire6UYB
logger.started('A more complex enable example with subtasks.')
task = new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: (ctx): void => {
        ctx.skip = true
      }
    },

    {
      title: 'This task will show subtasks.',
      task: (_, task): Listr =>
        task.newListr(
          [
            {
              title: 'This task will execute.',
              task: (): void => {}
            },

            {
              title: 'This task will never execute.',
              enabled: (ctx): boolean => !ctx.skip,
              task: (): void => {}
            }
          ],
          { rendererOptions: { collapse: false }, concurrent: true }
        )
    }
  ],
  { concurrent: false }
)

try {
  const context = await task.run()

  logger.completed([ 'ctx: %o', context ])
} catch (e: any) {
  logger.failed(e)
}
