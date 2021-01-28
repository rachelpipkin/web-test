import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

const inventory = [
  {
    date: '2021-01-28',
    startTime: '9:00am',
    endTime: '9:15am',
    booked: 2,
    total: 5,
  },
  {
    date: '2021-01-28',
    startTime: '9:15am',
    endTime: '9:30am',
    booked: 5,
    total: 5,
  },
  {
    date: '2021-01-29',
    startTime: '9:00am',
    endTime: '9:15am',
    booked: 0,
    total: 5,
  },
]

@Controller('inventory')
export class InventoryController {
  @Get()
  private async get(req: Request, res: Response) {
    return res.status(200).send(inventory)
  }
  @Post()
  private add(req: Request, res: Response) {
    const block = req.body

    inventory.push(block)

    return res.status(200).send(block)
  }
}
