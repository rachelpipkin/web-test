import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import moment from 'moment'

const inventoryList = []

const buildInventory = block => {
  const dateFormat = 'YYYY-MM-DD'
  const timeFormat = 'kk:mm'
  const dateTimeFormat = `${dateFormat} ${timeFormat}`
  const momentStart = moment(`${block.date} ${block.startTime}`, dateTimeFormat)
  const momentEnd = moment(`${block.date} ${block.endTime}`, dateTimeFormat)

  for (let start = momentStart.clone(); start.isSameOrBefore(momentEnd); start.add(15, 'minutes')) {
    const formattedInv = {
      date: block.date,
      startTime: moment(start).format(timeFormat),
      endTime: momentStart.add(15, 'minutes').format(timeFormat),
      booked: 0,
      total: parseInt(block.total),
    }

    inventoryList.push(formattedInv)
  }
}

@Controller('inventory')
export class InventoryController {
  @Get()
  private async get(req: Request, res: Response) {
    return res.status(200).send(inventoryList)
  }
  @Post()
  private add(req: Request, res: Response) {
    const block = req.body

    buildInventory(block)

    return res.status(200).send(block)
  }
}
