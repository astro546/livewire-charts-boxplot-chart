<?php


namespace Asantibanez\LivewireCharts\Models;

/**
 * Class BoxPlotChartModel
 * @package Asantibanez\LivewireCharts\Models
 * @property boolean $isMultiColumn
 * @property boolean $isStacked
 */
class BoxPlotChartModel extends BaseChartModel
{
  private $data;

  public function __construct(){
    parent::__construct();

    $this->data = collect();
  }

  public function addBox($title, $valuesSet)
  {
    $this->data->push([
      'title' => $title,
      'valuesSet' => $valuesSet
    ]);

    return $this;
  }

  public function toArray()
  {
    return array_merge(parent::toArray(), [
      'data' => $this->data->toArray(),
    ]);
  }

  public function fromArray($array)
  {
    parent::fromArray($array);

    $this->data = collect(data_get($array, 'data', []));
  }
}